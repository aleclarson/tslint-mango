import * as Lint from 'tslint'
import * as ts from 'typescript'

export class Rule extends Lint.Rules.AbstractRule {
  static FAILURE_STRING = 'Use comma instead of semicolon in interfaces.'

  apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    const walker = new SemicolonInterfaceWalker(sourceFile, this.getOptions())
    return this.applyWithWalker(walker)
  }
}

class SemicolonInterfaceWalker extends Lint.RuleWalker {
  visitInterfaceDeclaration(iface: ts.InterfaceDeclaration): void {
    const sourceFile = this.getSourceFile()
    for (const member of iface.members) {
      for (const child of member.getChildren(sourceFile)) {
        if (child.kind == ts.SyntaxKind.SemicolonToken) {
          this.addFailureAtNode(
            child,
            Rule.FAILURE_STRING,
            Lint.Replacement.replaceNode(child, ',')
          )
        }
      }
    }
    super.visitInterfaceDeclaration(iface)
  }
}
