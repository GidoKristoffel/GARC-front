export type Sidebar = SidebarGroup[];

export interface SidebarGroup {
  id: number;
  title: string;
  items: SidebarItem[];
}

export interface SidebarItem {
  id: number;
  icon: string;
  link: string;
  title: string;
}
