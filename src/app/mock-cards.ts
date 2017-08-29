import { Card } from './card';

export const CARDS : Card[] = [{
  clan: "crane",
cost: 1,
deck_limit: 3,
id: "above-question",
influence_cost: 2,
military_bonus: "+0",
name: "Above Question",
name_canonical: "above question",
pack_cards: [
{
illustrator: "Stu Barnes",
pack: {
id: "core"
},
position: 141,
quantity: 1
}
],
political_bonus: "+0",
side: "conflict",
text: "Attached character cannot be chosen as a target of an opponent's event.",
text_canonical: "attached character cannot be chosen as a target of an opponent's event.",
traits: [
"condition"
],
type: "attachment",
unicity: false},

{
clan: "scorpion",
cost: 2,
deck_limit: 3,
glory: 0,
id: "adept-of-shadows",
influence_cost: 3,
military: 2,
name: "Adept of Shadows",
name_canonical: "adept of shadows",
pack_cards: [
{
illustrator: "Felipe Gaona",
pack: {
id: "core"
},
position: 180,
quantity: 1
}
],
political: 2,
side: "conflict",
text: "<b>Action:</b> Lose 1 honor – return this character to your hand.",
text_canonical: "action: lose 1 honor - return this character to your hand.",
traits: [
"bushi",
"shinobi"
],
type: "character",
unicity: false
}
]
