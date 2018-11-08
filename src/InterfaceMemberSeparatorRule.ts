import * as Lint from 'tslint'
import * as ts from 'typescript'

const styles: [';', ',', ''] = [';', ',', '']
const styleTokens = {
  [ts.SyntaxKind.CommaToken]: ',',
  [ts.SyntaxKind.SemicolonToken]: ';',
}

type StyleOption = (typeof styles)[number]
type Options = {
  style: StyleOption
}

export class Rule extends Lint.Rules.AbstractRule {
  static metadata: Lint.IRuleMetadata = {
    ruleName: 'interface-member-separator',
    description: 'Enforces punctuation of interface members.',
    hasFix: true,
    optionsDescription: Lint.Utils.dedent`
        One argument may be optionally provided:
        * \`"style"\` checks alignment of function parameters.`,
    options: {
      type: 'array',
      items: {
        type: 'string',
        enum: styles,
      },
      minLength: 2,
      maxLength: 2,
    },
    optionExamples: [[true, ';'], [true, ','], [true, '']],
    type: 'style',
    typescriptOnly: true,
  }

  apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithFunction(sourceFile, walk, {
      style: this.ruleArguments.find(arg => styles.includes(arg)),
    })
  }
}

function walk(ctx: Lint.WalkContext<Options>) {
  const { options } = ctx
  ts.forEachChild(ctx.sourceFile, node => {
    if (ts.isInterfaceDeclaration(node)) {
      node.members.forEach(member => {
        const lastToken = member.getLastToken()
        if (lastToken) {
          const style: StyleOption = styleTokens[lastToken.kind] || ''
          if (style !== options.style) {
            ctx.addFailureAtNode(
              style !== '' ? lastToken : member,
              `Interface member must end with "${
                options.style
              }" instead of "${style}"`,
              style == ''
                ? Lint.Replacement.replaceFromTo(
                    lastToken.end,
                    lastToken.end,
                    options.style
                  )
                : Lint.Replacement.replaceNode(lastToken, options.style)
            )
          }
        }
      })
    }
  })
}
