export default function seed(models) {
  return models.User.create({
    firstName: "Jane",
    lastName: "Doe",
    email: "Jane@Doe.com",
    createdAt: "2018-01-23 01:23:00",
    updatedAt: "2018-03-08 09:34:00"
  }).catch(e => console.log(e));
}
