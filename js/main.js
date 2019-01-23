(() => {
    //component will go here
    const homePageComponent = {
        template: "<h2>You're on the home page</h2>"
    };

    const userPageComponent = {
        template: "<h2>You're on the user page</h2>"
    };

    const contactPageComponent = {
        template: "<h2>You're on the contact page</h2>"
    };

    const errorPageComponent = {
        template: "<h2>Page not Found! Please try again</h2>"
    };

    const routes = [
        { path: '/', name: 'home', component: homePageComponent },
        { path: '/user', name: 'user', component: userPageComponent },
        { path: '/contact', name: 'contact', component: contactPageComponent },
        { path: '/*', name: 'error', component: errorPageComponent }
    ];

    const router = new VueRouter({
        routes
    });
    
    const vm = new Vue({
        el: "#app",
        data:{
            message: "sup from vue!"
        },
        created:function(){
            console.log('paremt is live');
        },
        methods: {
            logParent(message){
                console.log("from the parent", message);
            },
            logMainMessage(message){
                console.log("called from inside a child, lives in the parent", message);
            }
        },
        components: {
            'homePageComponent': homePageComponent,
            'userPageComponent': userPageComponent,
            'contactPageComponent': contactPageComponent
        },

        router: router

    })

})();