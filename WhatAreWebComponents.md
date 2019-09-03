# What are Web Components and why do we need them

Web components are a set of web platform [APIs](https://developer.mozilla.org/en-US/docs/Web/Web_Components) that allow you to create new custom, reusable, encapsulated HTML tags
 to use in web pages and web apps.[(2)](https://www.webcomponents.org/introduction)
They are made possible by four new standards added by the [W3C](https://www.w3.org) to the [Open Web Platform](https://www.w3.org/wiki/Open_Web_Platform).
- [Custom Element](https://w3c.github.io/webcomponents/spec/custom/)
> The Custom Elements specification lays the foundation for designing and using new types of DOM elements.
- [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/)
> The shadow DOM specification defines how to use encapsulated style and markup in web components.
- [ES Modules](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-module-system)
> The ES Modules specification defines the inclusion and reuse of JS documents in a standards based, modular, performant way.
- [HTML Template](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element/)
> The HTML template element specification defines how to declare fragments of markup that go unused at page load, but can be instantiated later on at runtime.

In other words, the Web Component standards allow developers to create their own HTML tags and a web component is the 
[HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) related to the tag that was built using the 
web component APIs added to the Open Web Platform. Web components are easier to read, use, compose, test, maintain, and distribute 
than a groups of nested divs on a page filled with groups of nested divs that are completely separated from the
 JavaScript files and style sheets which contain the loose collection of functions and style declarations needed to give those nested groups 
of divs its appearance and behavior. No longer do developers have to toil their lives away drawing imaginary lines 
between the tangled mess of markup and logic just to accomplish one of the many menial little tasks required by the job. 
No longer do developers have to hack and abuse the limited amount of HTML tags that the browser provides them. 
Now developers can create their own HTML tags whose code, logic, and styles are all encapsulated withing a single [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).
 Since these new standards are part of the Open Web Platform there's lots of community support in the form of documentation, best practices, and 
 even a [web component hub](https://www.webcomponents.org/) where developers can search for and share the web components they have made. 
 Chances are there is already an web component created to handle the task at hand. No need to reinvent the wheel. 

To illustrate the use of this concept lets look at implementing a toast<sup>[1](#toastFootnote)</sup> component with the classic 
[jQuery/Bootstrap](https://getbootstrap.com/docs/4.3/components/toasts/) approach vs using a web component.


### The jQuery/Bootstrap Approach
1. Import the necessary libraries
    - ```
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
       <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
      ```
2. Add the mark up to the page
    - ```
        <div class="bs-example">
        	<p><strong>Note:</strong> By default toasts will automatically hide if you do not set autohide to false.</p>
        	
        	<button type="button" class="btn btn-primary show-toast">Show Toast</button>
            <div class="toast" id="myToast" style="position: absolute; top: 0; right: 0;">
                <div class="toast-header">
                    <strong class="mr-auto"><i class="fa fa-grav"></i> We miss you!</strong>
                    <small>11 mins ago</small>
                    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="toast-body">
                    <div>It's been a long time since you visited us. We've something special for you. <a href="#">Click here!</a></div>
                </div>
            </div>
        </div>
3. Add a click handler to the page (or in a seperate JavaScript file)
    - ```
        <script>
            $(document).ready(function(){
                $(".show-toast").click(function(){
                    $("#myToast").toast('show');
                });
            });
        </script>
        
        
### Using a web component
1. import the web component:
        
        <script type="module" src="./path-to/paper-toast.js"></script>
2. Add the mark up to the page:
    
        <paper-button raised onclick="toast.open()">Default toast</paper-button>
        <paper-toast id="toast" text="This toast auto-closes after 3 seconds"></paper-toast>


Just by comparing the code needed to solve a simple task the advantage of using web components are immediately apparent.
The advantages of using web components are:
- Web Components are easier to read because custom tags can be self descriptive and require less mark up.
- Web components don't require a monolithic JavaScript library.
- Web components encapsulate the logic, styles, and markup so there's no need to worry about side effects.
- Web components have methods that the developer can directly call. 
- Web components can be distributed through a package manager.
- Web components can be unit tested.
- Web components are future proof because they are based on standards.


###Tutorial
For more of a hands-on approach to learning about web components and how to build them check out 
the three part tutorial series written by Pascal Schilp titled 'Web Components: from zero to hero'
1. [An introduction to writing raw web components](https://dev.to/thepassle/web-components-from-zero-to-hero-4n4m)
2. [Supercharging web components with lit-html](https://dev.to/thepassle/web-components-from-zero-to-hero-part-two-38p4)
3. [Web components hero with LitElement](https://dev.to/thepassle/web-components-from-zero-to-hero-part-two-38p4)


### References
1. API: https://developer.mozilla.org/en-US/docs/Web/Web_Components
1. Introduction: https://www.webcomponents.org/introduction
1. World Wide Web Consortium: https://www.w3.org
1. Open Web Platform: https://www.w3.org/wiki/Open_Web_Platform
1. Custom Element: https://w3c.github.io/webcomponents/spec/custom/
1. Shadow DOM: https://w3c.github.io/webcomponents/spec/shadow/
1. ES Modules: https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-module-system
1. Template Element: https://html.spec.whatwg.org/multipage/scripting.html#the-template-element/
1. HTML Element: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
1. JavaScript Classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
1. Web components hub: https://www.webcomponents.org/

### Footnotes
<a id="toastFootnote">1</a>: A toast component is a popup message usually placed in the corner of the window that informs the
user of something related to the application then disappears after a few seconds.
