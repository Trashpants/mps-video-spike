export interface ControlsBarProps {

}

export interface controlData {
  label: string;
  value: string | number;
  iconName: "share" | "heart" | "message-square" | "menu";
  onPress: () => void
}
