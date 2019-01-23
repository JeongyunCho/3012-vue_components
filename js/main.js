(() => {
    //component will go here
    const homePageComponent = {
        template: "<h2>You're on the home page</h2>"
    };

    const usersPageComponent = {
        props:['id'],
        template: "#userList",

        // this always needs to be a function in a component
        data: function(){
            return {
                users: []
            }
        },

        created: function() {
            console.log('user component created!');
            this.fetchUserData(this.id);
        },

        methods: {
            fetchUserData(user){
                // debugger;

                let url = `./includes/index.php?user=${user}`;

                fetch(url)
                    .then(res => res.json())
                    .then(data => this.users = data)
                    .catch(function(error) {
                        
                        console.error(error);
                    });

            }
        }
    };

    const contactPageComponent = {
        template: "<h2>You're on the contact page</h2>"
    };

    const errorPageComponent = {
        template: "<h2>Page not Found! Please try again</h2>"
    };

    const routes = [
        { path: '/', name: 'home', component: homePageComponent },
        { path: '/users/:id', name: 'users', component: usersPageComponent, props: true },
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
            'usersPageComponent': usersPageComponent,
            'contactPageComponent': contactPageComponent
        },

        router: router

    })

})();