import styled from "styled-components";
import * as Slider from "@radix-ui/react-slider";

export const ProgressWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  gap: var(--g-8);
`;
export const CurrentTime = styled.span`
  width: 100%;
  max-width: 2rem;
  text-align: center;
`;

export const Duration = styled.span`
  width: 100%;
  max-width: 2rem;
  text-align: center;
`;

/**
 * RADIX STYLES
 */
export const SliderRoot = styled(Slider.Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 100%;

  &[data-orientation="horizontal"] {
    height: 20px;
  }
  &[data-orientation="vertical"] {
    flex-direction: column;
    width: 20px;
    height: 100px;
  }
`;
export const SliderTrack = styled(Slider.Track)`
  background-color: var(--dark-1);
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;

  &[data-orientation="horizontal"] {
    height: 3px;
  }
  &[data-orientation="vertical"] {
    width: 3px;
  }
`;
export const SliderRange = styled(Slider.Range)`
  position: absolute;
  background-color: var(--light);
  border-radius: 9999px;
  height: 100%;
`;
export const SliderThumb = styled(Slider.Thumb)`
  cursor: pointer;
  display: block;
  width: 10px;
  height: 10px;
  background-color: var(--light);
  border-radius: 10px;

  &:hover {
    box-shadow: 0 0 8px var(--dark-1);
  }
`;
