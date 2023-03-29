Getting started with TS

1. When using build in methods to get html elements, you are able to specify which types you are going to use.

    - For Example:
    const list = document.querySelector<HTMLUListElement>('#list')

    * Note * now the above statement can be interpreted as html list element or null

2. However not all built in methods have this option so in the case that the method isnt allow to give it a type like above, you can do it this way:

    - const form = document.getElementById('whatever') as HTMLFormElement | Null

3. You need option chaining here because the input value could be null as we decided above
    - TS is smart enough to know that anything after this conditional is not null because if the if it was null then we wouldve return at this conditional


* NOTE when downloading packages you may need to install the types version of the pacakge as well
    For example:
    - npm i uuid
    - npm i --save-dev @types/uuid

    - this should get rid of you errors when you use packages that are not written in type script


4. This is how you define a type is TS
    - it needs to match what you created before
    - it is good practice to just create the types at the top with a aliased name, then refer to that name in our function
