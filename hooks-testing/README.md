# Hooks
useState(), useEffects(), etc. are all hooks

They are required in order to create a dynamic website. 
For example, if we use a variable do display a title, the rendered page won't change after changing the variable.
We have to use a hook that will refresh the page -> useState().

* useState(): A Function that returns an array of undefined and a function
* useEffect(): A function that runs after return - it's the last to be called when the component is refreshed
    * Example use case: If we need to target an HTML element, we can do it only after it's rendered - that is after return statement.
    * If we use useEffect( func, **[ variable_name ]**), it will run only if variable_name has been changed

## Cleanup function
* When useEffect returns a function with no parameters, this function is called every time useEffect is called (except the first time)