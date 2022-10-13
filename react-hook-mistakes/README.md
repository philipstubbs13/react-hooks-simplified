# React Hook Mistakes

* <https://www.youtube.com/watch?v=GGo3MVBFr1A>
* React Hooks Simplified course: <https://courses.webdevsimplified.com/react-hooks-simplified>
* using state when you don't need it.
    * with forms, you can get away with using refs instead of having state.
* not using the function version of useState.
* state does not update immediately
    * when you update your state variable, it does not change right away. it does not change until the very next render. the state variable updates asynchronously.
* unnecessary useEffects
* Referential equality mistakes with useEffect
    * two objects even with the same values are still different from each other.
    * use useMemo to get around referential equality problems with objects and arrays.
    
    ```bash
    {} === {} // false
    ````
* Not aborting fetch requests
    * cancel fetch requests every time your useEffect changes.