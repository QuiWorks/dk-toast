# What are Web Components and why do we need them

Web components are a set of web platform [APIs](https://developer.mozilla.org/en-US/docs/Web/Web_Components) that allow you to create new custom, reusable, encapsulated HTML tags
 to use in web pages and web apps.[(1)](https://www.webcomponents.org/introduction)
They are made possible by four new standards added by the [W3C](https://www.w3.org) to the [Open Web Platform](https://www.w3.org/wiki/Open_Web_Platform).
- [Custom Element](https://w3c.github.io/webcomponents/spec/custom/)
> The Custom Elements specification lays the foundation for designing and using new types of DOM elements.
- [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/)
> The shadow DOM specification defines how to use encapsulated style and markup in web components.
- [ES Modules](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-module-system)
> The ES Modules specification defines the inclusion and reuse of JS documents in a standards based, modular, performant way.
- [HTML Template](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element/)
> The HTML template element specification defines how to declare fragments of markup that go unused at page load, but can be instantiated later on at runtime.

Plainly put, the Web Component standards allow developers to create their own HTML tags and a web component is the 
[HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) related to the tag that was built using the 
web components APIs added to the Open Web Platform. Web components are easier to reuse, compose, test, and maintain than
then maintaining groups of nested divs on a page filled with groups of nested divs that each have their separate JavaScript files 
and style sheets which contain the loose collection of functions and style declarations needed to give those nested groups 
of divs its appearance and behavior. No longer do developers have to toil their lives away drawing imaginary lines 
between the tangled mess of markup and logic just to accomplish one of the many menial little tasks required by the job. 

To illustrate this concept lets look at implementing a toast<sup>[1](#toastFootnote)</sup> component with the classic 
[jQuery/Bootstrap](https://getbootstrap.com/docs/4.3/components/toasts/) approach vs using a web component.


### The jQuery/Bootstrap Approach
1. Import the necessary libraries
    - ```
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
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
3. Add the logic to the page (or in a seperate JavaScript file)
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



### References
1. https://www.webcomponents.org/introduction
2. https://www.webcomponents.org/introduction
3. https://www.w3.org/wiki/Open_Web_Platform

### Footnotes
<a id="toastFootnote">1</a>: A toast component is a popup message usually placed in the corner of the window that informs the
user of something related to the application then disappears after a few seconds.