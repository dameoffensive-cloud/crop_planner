
Plan.prototype.get_data = function(){
  var data = {};
  data.crop = this.crop.id;
  data.amount = this.amount;

  if (this.fertilizer && !this.fertilizer.is_none()) {
    data.fertilizer = this.fertilizer.id;
  }

  if (this.irrigated) {
    data.irrigated = true;
  }

  if (this.location) {
    data.location = this.location;
  }

  return data;
};
