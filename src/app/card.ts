export interface Pack {
    id: string;
}

export interface PackCard {
    illustrator: string;
    pack: Pack;
    position: number;
    quantity: number;
}

export interface Card {
    clan: string;
    cost: number;
    deck_limit: number;
    id: string;
    influence_cost?: number;
    military_bonus?: string;
    name: string;
    name_canonical: string;
    pack_cards: PackCard[];
    political_bonus?: string;
    side: string;
    text: string;
    text_canonical: string;
    traits: string[];
    type: string;
    unicity: boolean;
    glory?: number;
    military?: number;
    political?: number;
    element?: string;
    strength?: number;
    strength_bonus?: string;
    fate?: number;
    honor?: number;
    influence_pool?: number;
}

export interface RootObject {
    records: Card[];
    size: number;
    success: boolean;
    last_updated: Date;
}
