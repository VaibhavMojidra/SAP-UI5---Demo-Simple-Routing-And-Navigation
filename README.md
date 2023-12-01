# SAP UI5 Demo Simple Routing And Navigation

Routing and navigation are crucial aspects of building single-page applications (SPAs) to provide a smooth user experience. In SAPUI5, routing and navigation are handled by the sap.ui.core.routing library.


### Routing Configuration

For enabling routing we need to configure the routing in sap.ui5 section of descriptor(manifest.json).

Refer to [/webapp/manifest.json](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Simple-Routing-And-Navigation/blob/master/webapp/manifest.json "manifest.json")

```
{
  .....
  "sap.ui5": {
    ....
    "routing": {
      "config": {
        "routerClass": "sap.m.routing.Router",
        "type": "View",
        "viewType": "XML",
        "path": "com.vaibhavmojidra.simpleroutingandnavigationdemo.view",
        "controlId": "app",
        "controlAggregation": "pages"
      },
      "routes": [
        {
          "pattern": "",
          "name": "invoicelist",
          "target": "invoicelist"
        },
        {
          "pattern": "detail",
          "name": "detail",
          "target": "detail"
        }
      ],
      "targets": {
        "invoicelist": {
          "id": "invoicelist",
          "name": "InvoiceList"
        },
        "detail": {
          "id": "detail",
          "name": "Detail"
        }
      }
    }
  }
}

```

The routing configuration object contains three properties: `config`, `routes`, and `targets`.

`config` This section contains the global router configuration and default values that apply for all routes and targets. We define the router class that we want to use and where our views are located in the app. To load and display views automatically, we also specify which control is used to display the pages and what aggregation should be filled when a new page is displayed.

* `routerClass`: This property specifies the class of the router to be used. In the provided code, the router class is set to sap.m.routing.Router.
* `type`: Routing type to view
* `viewType`: type of view is XML (can be Javascript, HTML, JSON, XML)
* `path`: This property specifies the path to the view. In the provided code, the path is set to com.vaibhavmojidra.simpleroutingandnavigationdemo.view.
* `controlId`: It specifies the ID of the control that will be used as the container for the views in the application.
* `controlAggregation`: It specifies the aggregation of the control that will be used as the container for the views in the application. In the provided code, the controlAggregation property is set to "pages". This means that the control with the ID "app" will be used as the container for the views, and the "pages" aggregation of this control will be used to add the views. An aggregation is a property of a control that can contain other controls. In the case of the routing configuration, the views are added to the "pages" aggregation of the control with the ID "app".

`routes` Each route defines a name, a pattern, and one or more targets to navigate to when the route has been hit. The pattern is basically the URL part that matches to the route, we define two routes for our app. The first one is a default route that will show the overview page with the content from the previous steps, and the second is the detail route with the URL pattern detail that will show a new page.
* `pattern`: Specifies the URL pattern for the route. When the user navigates to a URL that matches this pattern, the corresponding view is loaded.
* `name`: Specifies the name of the route. This name is used to refer to the route in the application code.
* `target`: Specifies the target view for the route. When the user navigates to a URL that matches the route’s pattern, the target view is loaded.

`targets` A target defines a view, or even another component, that is displayed; it is associated with one or more routes, and it can also be displayed manually from within the app. Whenever a target is displayed, the corresponding view is loaded and shown in the app. In our app we simply define two targets with a view name that corresponds to the target name.
* `id`: Specifies the ID of the target view. This ID is used to refer to the target view in the application code.
* `name`: Specifies the name of the target view. This name is used to refer to the target view in the routing configuration.


### Code Explaination

Refer to [/webapp/view/App.view.xml](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Simple-Routing-And-Navigation/blob/master/webapp/view/App.view.xml "App.view.xml")

Our App view is now only containing the empty app tag. The router will automatically add the view that corresponds to the current URL into the app control. The router identifies the app control with the ID that corresponds to the property controlId: “app” in the AppDescriptor. This will act as container.

Refer to [/webapp/view/InvoiceList.view.xml](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Simple-Routing-And-Navigation/blob/master/webapp/view/InvoiceList.view.xml "InvoiceList.view.xml")

Normal List is shown. but 2 new attribute to our ObjectListItem. type="Navigation" which will show a navigation arrow Icon in each Item of our list and  press=".onPress" this method is defined in the controller to navigate to next page.

Refer to [/webapp/controller/InvoiceList.controller.js](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Simple-Routing-And-Navigation/blob/master/webapp/controller/InvoiceList.controller.js "InvoiceList.controller.js")

We add the event handler function (onPress) to the controller of our invoices list. Now it is time to navigate to the detail page by clicking an item in the invoice list. We access the router instance for our app by calling the helper method getOwnerComponent().getRouter(). On the router we call the navTo method to navigate to the detail route that we specified in the routing configuration.

Refer to [/webapp/view/Detail.view.xml](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Simple-Routing-And-Navigation/blob/master/webapp/view/Detail.view.xml "Detail.view.xml")

We add a second view for the detail view. It only contains a page and an ObjectHeader control that displays the static text Invoice.

----

[![Vaibhav Mojidra - 1.jpeg](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Simple-Routing-And-Navigation/master/screenshot/1.jpeg "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)

[![Vaibhav Mojidra - 2.jpeg](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Simple-Routing-And-Navigation/master/screenshot/2.jpeg "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)

[![Vaibhav Mojidra - 3.gif](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Simple-Routing-And-Navigation/master/screenshot/3.gif "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)