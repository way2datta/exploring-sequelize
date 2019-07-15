export default function seed(models) {
    return models.User.bulkCreate({
        "firstName": "Jane",
        "lastName": "Doe",
        "email": "Jane@Doe.com",
        "createdAt": "2018-01-23 01:23:00",
        "updatedAt": "2018-03-08 09:34:00"
      },
      {
        "firstName": "Jeen",
        "lastName": "Doe",
        "email": "Jeen@Doe.com",
        "createdAt": "2019-01-31 08:54:00",
        "updatedAt": "2019-12-23 11:32:22"
      })
  .catch(e => console.log(e))
}