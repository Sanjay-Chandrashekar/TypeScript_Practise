# The Benefits of Migrating from JavaScript to TypeScript
By [Raphael Feng](https://blog.appdynamics.com/author/raphaelfeng/) | Oct 21,2015 | 6 min read

[Recently, we moved our Browser RUM agent from JavaScript to TypeScript](https://blog.appdynamics.com/devops/8-steps-migrating-javascript-typescript/). In my last post, I focused on walking through the steps of migrating from JavaScript, the challenges, and best practices we uncovered along the way.

This one will focus on more details of the benefits and one missing feature in TypeScript compiler we suggest to implement.

TypeScript’s main benefits:

1. Class and Module Support
2. Static Type-checking
3. ES6 Feature Support
4. Clear Library API Definition
5. Build-in Support for JavaScript Packaging
6. Syntax Similarity to Our Backend Languages (Java, [Scala](http://www.slideshare.net/razvanc/quick-typescript-vs-scala-sample))
7. Superset of JavaScript

### Class and Module Support

Keywords like class, interface, extends and module are available in TypeScript.

You can define a class as
```javascript
// class define in TypeScript
class VirtualPageTracker extends Tracker {
	     private virtualPageName: string = '';
	     constructor(name) {
		super(name);
         }
    
    getName(): void {
        return this.virtualPageName;
    }

    static getTrackerName(): string {
        return  'VirtualPageTracker';
    }
}
```
TypeScript compiler will transcompile it to

```javascript

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d
 = b
;
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// class define in TypeScript
var VirtualPageTracker = (function (_super) {
    __extends(VirtualPageTracker, _super);
    function VirtualPageTracker(name) {
        _super.call(this, name);
        this.virtualPageName = '';
    }
    VirtualPageTracker.prototype.getName = function () {
        return this.virtualPageName;
    };
    VirtualPageTracker.getTrackerName = function () {
        return 'VirtualPageTracker';
    };
    return VirtualPageTracker;
})(Tracker);

```
