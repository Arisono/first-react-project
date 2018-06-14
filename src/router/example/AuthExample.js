/**
 * Created by Arison on 2018/6/13.
 */
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
/**
 * 重定向
 * Created by Arison on 2018/6/13.
 */
class AuthExample extends React.Component{
       constructor(props){
        super(props);
    }

    render(){
        const Public = () => <h3>Public</h3>;
        const Protected = () => <h3>Protected</h3>;
        const fakeAuth ={
            isAuthenticated: false,
            authenticate(cb) {
                this.isAuthenticated = true;
                setTimeout(cb, 100); // fake async
            },
            signout(cb) {
                this.isAuthenticated = false;
                setTimeout(cb, 100);
            }}

            const AuthButton =withRouter(({history})=> fakeAuth.isAuthenticated?(
                <p>     Welcome!{" "}
                    <button
                        onClick={() => {
                            fakeAuth.signout(() => history.push("/"));
                        }}
                    >
                        Sign out
                    </button></p>
            ):(
                <p>You are not logged in.</p>
            ));

        const PrivateRoute = ({ component: Component, ...rest }) => (
            <Route
                {...rest}
                render={props =>
                    fakeAuth.isAuthenticated ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
                }
            />
        );

        /*登录组件*/
        class Login extends React.Component{
            constructor(props){
                super(props);
            }
            state = {
                redirectToReferrer: false
            };

            login = () => {
                fakeAuth.authenticate(() => {
                    this.setState({ redirectToReferrer: true });
                });
            };

            render(){
                const { from } = this.props.location.state || { from: { pathname: "/" } };
                const { redirectToReferrer } = this.state;

                if (redirectToReferrer) {
                    //已经登录了
                    return <Redirect to={from} />;
                }
                //未登录
                return (
                    <div>
                        <p>You must log in to view the page at {from.pathname}</p>
                        <button onClick={this.login}>登录</button>
                    </div>
                );
            }
        };
        return  <Router>
            <div>
               <h2>重定向+Redirects (Auth)</h2>
                <div>
                    <AuthButton />
                    <ul>
                        <li>
                            <Link to={`${this.props.match.url}/public`}>Public Page</Link>
                        </li>
                        <li>
                            <Link to={`${this.props.match.url}/protected`}>Protected Page</Link>
                        </li>
                    </ul>
                    <Route path={`${this.props.match.url}/public`} component={Public} />
                    <Route path={`/login`}  component={Login}/>
                    <PrivateRoute path={`${this.props.match.url}/protected`} component={Protected} />
                </div>
            </div>
        </Router>
    }
}

export  default AuthExample;