import styled, { css } from 'styled-components'

const variants = {
  primary: css`
    background: linear-gradient(135deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.primaryLight});
    color: white;
    &:hover { filter: brightness(1.1); }
  `,
  secondary: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.textSecondary};
    border: 1px solid ${({ theme }) => theme.colors.border};
    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    }
  `,
  danger: css`
    background: linear-gradient(135deg, #c0392b, #e74c3c);
    color: white;
    &:hover { filter: brightness(1.1); }
  `,
}

const sizes = {
  sm: css`padding: 8px 16px; font-size: 0.8rem;`,
  md: css`padding: 12px 24px; font-size: 0.9rem;`,
  lg: css`padding: 16px 32px; font-size: 1rem;`,
}

const StyledButton = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  display: inline-flex;
  align-items: center;
  gap: 8px;

  ${({ $variant }) => variants[$variant] || variants.primary}
  ${({ $size }) => sizes[$size] || sizes.md}

  &:active { transform: scale(0.97); }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  ...props
}) {
  return (
    <StyledButton $variant={variant} $size={size} {...props}>
      {children}
    </StyledButton>
  )
}
