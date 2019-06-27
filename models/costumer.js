module.exports = function(sequelize, DataTypes) {
  const Costumer = sequelize.define(
    "Costumer",
    {
      ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Name: DataTypes.STRING,
      Birthday: DataTypes.DATE,
      Sex: DataTypes.INTEGER,
      BirthdayPlace: DataTypes.STRING,
      SiblingNumber: DataTypes.INTEGER
    },
    {
      tableName: "Costumer",
      timestamps: false
    }
  );

  Costumer.getAll = function(req, res, next) {
    Costumer.findAll()
      .then(c => {
        c.map(e => {
          e.dataValues.BirthdayFormatted = moment(e.Birthday).format(
            "DD/MM/YYYY"
          );
          e.dataValues.Age = moment().diff(e.Birthday, "years");
        });
        res.json({ Costumer: c });
      })
      .catch(err => {
        next(err);
      });
  };

  return Costumer;
};
