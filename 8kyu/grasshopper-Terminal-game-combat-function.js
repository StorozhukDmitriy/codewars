//Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

//Solution
function combat(health, damage) {
  health = health - damage;
  if (health < 0) return 0;
  return health;
}
