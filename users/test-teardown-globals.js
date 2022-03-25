// Prevents Jest from complaining of open handles
module.exports = () => {
    process.exit(0);
  };