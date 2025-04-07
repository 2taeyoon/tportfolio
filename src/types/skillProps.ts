export interface SkillCircleProps {
  radius: number;
  itemSize: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export interface SkillCircleImageItemProps {
  items: {
    src: string;
    shadowColors: string;
    title: string;
    body: string;
  };
  index: number;
  angleStep: number;
  isDraggingRef: boolean;
  radius: number;
  itemSize: number;
  rotation: number;
  activeIndex: number;
}

export interface SkillDetailProps {
  radius: number;
  itemSize: number;
  activeIndex: number;
}

export interface SkillDetailImageProps {
  skillItemsData: {
    src: string;
    shadowColors: string;
    title: string;
    body: string;
  }[];
  itemSize: number;
  activeIndex: number;
} 