import { ELanguage } from "../../../core/enums/language.enum";
import { EArtifactLevelingCategories } from "../enums/artifact-leveling-categories.enum";

export type TArtifactsCalculation = IArtifactCalculation[];

export interface IArtifactCalculation {
  index: number;
  label: EArtifactLevelingCategories;
  characters: IArtifactsCharacters[];
}

export interface IArtifactsCharacters {
  id: string;
  name: {
    [ELanguage.English]: string;
    [ELanguage.Ukrainian]: string;
    [ELanguage.Russian]: string;
  };
  icon: string;
  index: number;
}

export type TUpdateArtifactsCalculation = IUpdateArtifactCalculation[];

export interface IUpdateArtifactCalculation {
  index: number;
  label: EArtifactLevelingCategories;
  characterIds: string[];
}
