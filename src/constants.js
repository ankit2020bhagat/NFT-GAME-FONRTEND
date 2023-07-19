const CONTRACT_ADDRESS = "0x8198f5d8F8CfFE8f9C413d98a0A55aEB8ab9FbB7";

/*
 * Add this method and make sure to export it on the bottom!
 */
const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageUri,
    hp: characterData.hp,
    maxHp: characterData.maxhp,
    attackDamage: characterData.attackDamage,
  };
};

export { CONTRACT_ADDRESS, transformCharacterData };
