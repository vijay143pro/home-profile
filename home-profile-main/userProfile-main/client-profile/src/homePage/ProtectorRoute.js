import React from 'react'
import { Route } from 'react-router-dom';
import { redirect } from 'react-router-dom';
function ProtectorRoute({component,...rest}) {
    var RenderComponents=component;
    return (
      <Route {...rest}
      render={
          props=>{
              return true?(
                  <RenderComponents {...props}/>
              ):(
                  <redirect to={{
                      pathname:'/login'
                  }}/>
              )
          }
      }
      />
    )
}

export default ProtectorRoute