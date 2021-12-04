### Working with Modules

**Modules in ES2015**
- Native modules
- Support for modules built-in to javascript
- Similar to other module formats
    - Support for depenedency management
    - Encapsulate implementation details
    - Explicitly expose public API
- Different from other module formats
    - No libraries require to create modules
    - Currently must transpile to ES5
    - Syntax

*ES2015 Module Workflow*
```     
                                              Runtime
                                 ________________|__________________
                                |                                   |
ES2015 --> Transpile (Babel) --> AMD, CommonJS, etc. --> RequireJS, SystemJS, etc. 
|___________________________________________________|
                        |
                Development/Build Process

```

**Importing and Exporting**
- Importing from a module 
    - Imported items are dependencies
    - May import an entire module or just part of it
    - May create an alias for imported items
- Exporting from a module
    - Exposes the API of the module
    - May export items at declaration or all at once as a list
    - May specify a "default" export


**What is Babel?**
- Transpiler
- Executed as a build step
- Converts all of new ES2015 features to equivalent code in earlier version of javascript
- Produces clean, readable JavaScript
- Highle configurable
- Supports all of the popular module formats

[Babel Link](https://babeljs.io/)

```javascript

// npm install babel-cli --save-dev
// npm install babel-preset-es2015 --save-dev
// ./node_modules/.bin/babel folder-or-file-name --presets es2015 --out-dir build
    // build is the directory name you can give whatever you want

```

------------------

### Module Bundlers

Solve the same problems as module loaders, but they do it at build step rather than at runtime.
- Alternative to module loaders
- Follow module dependencies
- Correctly order dependencies
- Combine modules into fewer files
- May decrease application startup time

*Module Bundler Workflow*
```
                                                      Runtime
                                              ___________|________
                                             |                    |
AMD, CommonJS, ES2015 Modules --> Bundler --> bundle.js --> Browser
|______________________________________________________|
                        |
                Build Process/Development
```

**Browserify**
- Attempts to make Node.js modules available for browser apps
- Bundles CommonJS modules
- Easy to use and work great

[Browserify Link](https://browserify.org/)
> npm install browserify --save-dev
> ./node_modules/.bin/browserify file_name.js --outfile output_file.js
> <script src="output_file.js" type="text/javascript"></script>


**WebPack**
- New tool with more features as browserify
- Bundles AMD, CommonJS, and ES2015 modules
- Code splitting
- Bundles more than just Javascript modules
- Uses "loaders" for transformation before bundling

> webpack.github.io  visit the site for more info

