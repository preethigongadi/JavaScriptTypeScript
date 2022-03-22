//npm install -g typescript
export default class Base
{
    constructor()
    {

    }

    serialize()
    {
        return JSON.stringify(this);
    }

    clone() //shallow copy
    {
        return {
            ...this //spread operator
        }
    }
}