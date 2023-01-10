import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";

export const RightSlot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: var(--m-8);
`;

/**
 * RADIX STLYES
 */
export const DropdownMenuContent = styled(DropdownMenu.Content)`
  font-size: var(--fs-14);
  font-weight: 500;
  color: var(--lightGray);
  user-select: none;
  background-color: var(--dark-3);
  box-shadow: var(--shadow);
  padding: var(--p-8);
`;

export const DropdownMenuSubContent = styled(DropdownMenu.SubContent)`
  background-color: var(--dark-3);
  box-shadow: var(--shadow);
`;

export const DropdownMenuSubTrigger = styled(DropdownMenu.SubTrigger)`
  display: flex;
  cursor: initial !important;
`;

export const DropdownMenuArrow = styled(DropdownMenu.Arrow)`
  fill: var(--dark-3);
`;

export const DropdownMenuItem = styled(DropdownMenu.Item)`
  font-size: var(--fs-14);
  font-weight: 500;
  color: var(--lightGray);
  user-select: none;
  padding: var(--p-8);

  &:hover {
    background-color: var(--dark-2);
  }
`;
