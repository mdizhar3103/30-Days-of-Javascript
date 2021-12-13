### JavaScript Security

**Dynamic Code Execution**
Javascript code can be loaded from Web, files, or user input
- Parse: Transform source code into abstract syntax tree
- Compile: Generate bytecode just-in-time
- Execute: Run bytecode instructions

*Javascript can generate and execute new code at runtime*

**Unsafe functions**
- Eval()
- Function() constructor

```js
f = new Function('param', code)
f('argument')
```

**Security Testing Technique**
- SAST (Static Application Security Testing)
- DAST (Dynamic Application Security Testing)
- IAST (Interactive Application Security Testing)

