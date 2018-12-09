import * as Lint from 'tslint';
import * as ts from 'typescript';
const styles = [';', ',', ''];
const styleTokens = {
    [ts.SyntaxKind.CommaToken]: ',',
    [ts.SyntaxKind.SemicolonToken]: ';',
};
export class Rule extends Lint.Rules.AbstractRule {
    apply(sourceFile) {
        return this.applyWithFunction(sourceFile, walk, {
            style: this.ruleArguments.find(arg => styles.includes(arg)),
        });
    }
}
Rule.metadata = {
    ruleName: 'interface-member-separator',
    description: 'Enforces punctuation of interface members.',
    hasFix: true,
    optionsDescription: Lint.Utils.dedent `
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
};
function walk(ctx) {
    const { options } = ctx;
    ts.forEachChild(ctx.sourceFile, node => {
        if (ts.isInterfaceDeclaration(node)) {
            node.members.forEach(member => {
                const lastToken = member.getLastToken();
                if (lastToken) {
                    const style = styleTokens[lastToken.kind] || '';
                    if (style !== options.style) {
                        ctx.addFailureAtNode(style !== '' ? lastToken : member, `Interface member must end with "${options.style}" instead of "${style}"`, style == ''
                            ? Lint.Replacement.replaceFromTo(lastToken.end, lastToken.end, options.style)
                            : Lint.Replacement.replaceNode(lastToken, options.style));
                    }
                }
            });
        }
    });
}
