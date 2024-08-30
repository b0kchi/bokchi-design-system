import styled from "styled-components";
import { createColorToken } from "../tokens/colors";
import baseColorToken from "../tokens/tokens.json";

type TextType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type TextState =
  | "default"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "disabled";

interface ITyphographyProps {
  type?: TextType;
  children: string;
  state?: TextState;
  classNames?: string;
}

const baseColorChip = baseColorToken;
const colorChip = createColorToken();

const StyledHeading1 = styled.h1<ITyphographyProps>`
  font-weight: 600;
  font-size: 2.375rem;

  &[data-state="secondary"] {
    color: ${baseColorChip.colors.text.colorTextSecondary.$value};
  }
  &[data-state="success"] {
    color: ${colorChip.colorSuccessText};
  }
  &[data-state="warning"] {
    color: ${colorChip.colorWarningText};
  }
  &[data-state="error"] {
    color: ${colorChip.colorErrorText};
  }
  &[data-state="info"] {
    color: ${colorChip.colorInfoText};
  }
  &[data-state="disabled"] {
    color: ${baseColorChip.colors.text.colorTextQuarternary.$value};
  }
`;

const StyledHeading2 = styled.h2<ITyphographyProps>`
  font-weight: 600;
  font-size: 1.875rem;

  &[data-state="secondary"] {
    color: ${baseColorChip.colors.text.colorTextSecondary.$value};
  }
  &[data-state="success"] {
    color: ${colorChip.colorSuccessText};
  }
  &[data-state="warning"] {
    color: ${colorChip.colorWarningText};
  }
  &[data-state="error"] {
    color: ${colorChip.colorErrorText};
  }
  &[data-state="info"] {
    color: ${colorChip.colorInfoText};
  }
  &[data-state="disabled"] {
    color: ${baseColorChip.colors.text.colorTextQuarternary.$value};
  }
`;

const StyledHeading3 = styled.h3<ITyphographyProps>`
  font-weight: 600;
  font-size: 1.5rem;

  &[data-state="secondary"] {
    color: ${baseColorChip.colors.text.colorTextSecondary.$value};
  }
  &[data-state="success"] {
    color: ${colorChip.colorSuccessText};
  }
  &[data-state="warning"] {
    color: ${colorChip.colorWarningText};
  }
  &[data-state="error"] {
    color: ${colorChip.colorErrorText};
  }
  &[data-state="info"] {
    color: ${colorChip.colorInfoText};
  }
  &[data-state="disabled"] {
    color: ${baseColorChip.colors.text.colorTextQuarternary.$value};
  }
`;

const StyledHeading4 = styled.h4<ITyphographyProps>`
  font-weight: 600;
  font-size: 1.25rem;

  &[data-state="secondary"] {
    color: ${baseColorChip.colors.text.colorTextSecondary.$value};
  }
  &[data-state="success"] {
    color: ${colorChip.colorSuccessText};
  }
  &[data-state="warning"] {
    color: ${colorChip.colorWarningText};
  }
  &[data-state="error"] {
    color: ${colorChip.colorErrorText};
  }
  &[data-state="info"] {
    color: ${colorChip.colorInfoText};
  }
  &[data-state="disabled"] {
    color: ${baseColorChip.colors.text.colorTextQuarternary.$value};
  }
`;

const StyledHeading5 = styled.h5<ITyphographyProps>`
  font-weight: 600;
  font-size: 1rem;

  &[data-state="secondary"] {
    color: ${baseColorChip.colors.text.colorTextSecondary.$value};
  }
  &[data-state="success"] {
    color: ${colorChip.colorSuccessText};
  }
  &[data-state="warning"] {
    color: ${colorChip.colorWarningText};
  }
  &[data-state="error"] {
    color: ${colorChip.colorErrorText};
  }
  &[data-state="info"] {
    color: ${colorChip.colorInfoText};
  }
  &[data-state="disabled"] {
    color: ${baseColorChip.colors.text.colorTextQuarternary.$value};
  }
`;

const StyledHeading6 = styled.h6<ITyphographyProps>`
  font-weight: 600;
  font-size: 0.875rem;

  &[data-state="secondary"] {
    color: ${baseColorChip.colors.text.colorTextSecondary.$value};
  }
  &[data-state="success"] {
    color: ${colorChip.colorSuccessText};
  }
  &[data-state="warning"] {
    color: ${colorChip.colorWarningText};
  }
  &[data-state="error"] {
    color: ${colorChip.colorErrorText};
  }
  &[data-state="info"] {
    color: ${colorChip.colorInfoText};
  }
  &[data-state="disabled"] {
    color: ${baseColorChip.colors.text.colorTextQuarternary.$value};
  }
`;

const StyledParagraph = styled.p<ITyphographyProps>`
  font-size: 1rem;

  &[data-state="secondary"] {
    color: ${baseColorChip.colors.text.colorTextSecondary.$value};
  }
  &[data-state="success"] {
    color: ${colorChip.colorSuccessText};
  }
  &[data-state="warning"] {
    color: ${colorChip.colorWarningText};
  }
  &[data-state="error"] {
    color: ${colorChip.colorErrorText};
  }
  &[data-state="info"] {
    color: ${colorChip.colorInfoText};
  }
  &[data-state="disabled"] {
    color: ${baseColorChip.colors.text.colorTextQuarternary.$value};
  }
`;

const StyledSpan = styled.span<ITyphographyProps>`
  font-size: 1rem;

  &[data-state="secondary"] {
    color: ${baseColorChip.colors.text.colorTextSecondary.$value};
  }
  &[data-state="success"] {
    color: ${colorChip.colorSuccessText};
  }
  &[data-state="warning"] {
    color: ${colorChip.colorWarningText};
  }
  &[data-state="error"] {
    color: ${colorChip.colorErrorText};
  }
  &[data-state="info"] {
    color: ${colorChip.colorInfoText};
  }
  &[data-state="disabled"] {
    color: ${baseColorChip.colors.text.colorTextQuarternary.$value};
  }
`;

export default function Typhograpy(props: ITyphographyProps) {
  if (props.type == "h1") {
    return (
      <StyledHeading1 state={props.state}>{props.children}</StyledHeading1>
    );
  } else if (props.type == "h2") {
    return (
      <StyledHeading2 data-state={props.state} className={props.classNames}>
        {props.children}
      </StyledHeading2>
    );
  } else if (props.type == "h3") {
    return (
      <StyledHeading3 data-state={props.state} className={props.classNames}>
        {props.children}
      </StyledHeading3>
    );
  } else if (props.type == "h4") {
    return (
      <StyledHeading4 data-state={props.state} className={props.classNames}>
        {props.children}
      </StyledHeading4>
    );
  } else if (props.type == "h5") {
    return (
      <StyledHeading5 data-state={props.state} className={props.classNames}>
        {props.children}
      </StyledHeading5>
    );
  } else if (props.type == "h6") {
    return (
      <StyledHeading6 data-state={props.state} className={props.classNames}>
        {props.children}
      </StyledHeading6>
    );
  } else if (props.type == "p") {
    return (
      <StyledParagraph data-state={props.state} className={props.classNames}>
        {props.children}
      </StyledParagraph>
    );
  } else if (props.type == "span") {
    return (
      <StyledSpan data-state={props.state} className={props.classNames}>
        {props.children}
      </StyledSpan>
    );
  }
}
