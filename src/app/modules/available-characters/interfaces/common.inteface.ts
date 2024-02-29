import { EQuality } from "../../../core/enums/quality.enum";
import { EElement } from "../../../core/enums/element.enum";
import { ERegion } from "../../../core/enums/region.enum";
import { ECharacterBonusAttribute } from "../../../core/enums/character-bonus-attribute.enum";
import { EWeaponType } from "../../../core/enums/weapon-type.enum";
import { EArche } from "../../../core/enums/arche.enum";
import { ELanguage } from "../../../core/enums/language.enum";

export interface ICharacter {
  id: string;
  name: {
    [ELanguage.English]: string;
    [ELanguage.Ukrainian]: string;
    [ELanguage.Russian]: string;
  };
  quality: EQuality;
  elementalType: EElement;
  region: ERegion;
  bonusAttribute: ECharacterBonusAttribute;
  weapon: EWeaponType;
  constellation: {
    en: string;
    ua: string;
    ru: string;
  };
  arche: EArche[];
  birthday: Date;
  title: {
    en: string;
    ua: string;
    ru: string;
  };
  affiliation: {
    en: string;
    ua: string;
    ru: string;
  };
  icon: string;
  splashArt: string;
  cardIcon: string;
  available: boolean;
}
