The Plan

Problems:

- data model does not reflect the actual geographic places where people live
    - there is also unneccessary data we do not need currently
- filter system needs to be on two pages but we do not know it's architecture yet
- we need to understand how the architecture of the search system is, and how that can translate input fields to the database
- when user selects dog walking as a service, we need to have the radio button then select dog if it has selected cat or others


- Filter system

1. We need a way to track the different inputs that the user can enter
    - what if a user has not set an input

2. Once we have all the input states, we need to iteratively add inputs to the query of the Link that the users clicks on (Search Now)
    - trailing that information from landing page to sql request

LOOP