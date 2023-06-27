# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. Update the database on all environment / DB migration script
   - Modify the agent db to include a new column for custom-id and add a migration script to make this change for all env
   - Add a new APIs to update/insert the custom ids for any particular agent
2. Custom Id adaptation in our existing APIs
   - Modify getShiftsByFacility function to return custom ids instead of internal database ids.
   - Modify generateReport function to use custom ids instead of internal database ids.
   - Make sure each Id is unique and doesn't conflict with facilities id. (we can decide prefix "AG-${uuid}" on all ids)
   - Make sure your UI is expecting different id ( validations and all)
3. Documentation update for APis and Schema
   - Update the docs with new custom id and explanation.
4. Test cases Updation
   - We have add testcase for our new Api ( for updating custom id)
   - Add negative testcase if someone tries to enter already exisiting id
   - Check UI part too to see the newly added custom id in pdf.

The time estimates will depend on project code structure and level of scale it is on. It might varies wrt no of agents, migration script running time. If I were in the staffing company , I would have asked around 2 week for developement ( inclusive of writing testcase, api , script). And for QA, it can be done in 1 week.
