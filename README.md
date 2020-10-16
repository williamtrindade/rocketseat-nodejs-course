## Nodejs / Typescript API.
___
### Run project:
> **$ yarn dev**
___

### Test in postman:
[Access the collection export](https://github.com/williamtrindade/rocketseat-nodejs-course/blob/master/postman/Products%20API.postman_collection.json)
___

### Connect to mongodb:
in server.ts
```typescript
mongoose.connect({your mongo server url}, { useNewUrlParser: true, useUnifiedTopology: true })
```
