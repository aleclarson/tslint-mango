"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var Lint = require("tslint");
var ts = require("typescript");
var styles = [';', ',', ''];
var styleTokens = (_a = {},
    _a[ts.SyntaxKind.CommaToken] = ',',
    _a[ts.SyntaxKind.SemicolonToken] = ';',
    _a);
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk, {
            style: this.ruleArguments.find(function (arg) { return styles.includes(arg); }),
        });
    };
    Rule.metadata = {
        ruleName: 'interface-member-separator',
        description: 'Enforces punctuation of interface members.',
        hasFix: true,
        optionsDescription: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        One argument may be optionally provided:\n        * `\"style\"` checks alignment of function parameters."], ["\n        One argument may be optionally provided:\n        * \\`\"style\"\\` checks alignment of function parameters."]))),
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
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    var options = ctx.options;
    ts.forEachChild(ctx.sourceFile, function (node) {
        if (ts.isInterfaceDeclaration(node)) {
            node.members.forEach(function (member) {
                var lastToken = member.getLastToken();
                if (lastToken) {
                    var style = styleTokens[lastToken.kind] || '';
                    if (style !== options.style) {
                        ctx.addFailureAtNode(style !== '' ? lastToken : member, "Interface member must end with \"" + options.style + "\" instead of \"" + style + "\"", style == ''
                            ? Lint.Replacement.replaceFromTo(lastToken.end, lastToken.end, options.style)
                            : Lint.Replacement.replaceNode(lastToken, options.style));
                    }
                }
            });
        }
    });
}
var templateObject_1;
