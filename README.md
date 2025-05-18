## points to remember 

### dispatch

- dispatch sends an action to the store, which passes it to the appropriate slice reducer. Inside the slice, the correct case reducer runs to update the state.

- So yes, dispatch triggers a case reducer, but not directly.

- It goes:
- dispatch(action) → store → root reducer → slice reducer → case reducer (like updateName)

### useSelector

- useSelector reads data from the current Redux store state. It does not trigger or involve any reducer.

- It just accesses state.userupdate.name, like reading from a plain object.

- Reducers only run when an action is dispatched.


- dispatch sends an action to the store, which passes it to the appropriate slice's case reducer to update the state.     useSelector simply reads the latest state from the store — it does not involve reducers at all.

- dispatch = triggers reducers

- useSelector = reads from store (no reducers involved)