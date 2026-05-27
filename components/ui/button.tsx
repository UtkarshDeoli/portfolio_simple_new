import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        neomorphic:
          "bg-[#2a2f36] text-[#00ADB5] shadow-[8px_8px_16px_#1a1d22,-8px_-8px_16px_#3a434e] hover:shadow-[4px_4px_8px_#1a1d22,-4px_-4px_8px_#3a434e] active:shadow-[inset_4px_4px_8px_#1a1d22,inset_-4px_-4px_8px_#3a434e] transform hover:scale-[0.98] active:scale-[0.96]",
        neomorphicPrimary:
          "bg-[#00ADB5] text-white shadow-[8px_8px_16px_rgba(0,173,181,0.3),-8px_-8px_16px_rgba(0,173,181,0.1)] hover:shadow-[4px_4px_8px_rgba(0,173,181,0.4),-4px_-4px_8px_rgba(0,173,181,0.1)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.1)] transform hover:scale-[0.98] active:scale-[0.96]",
        neomorphicOutline:
          "bg-[#393E46]/20 text-[#00ADB5] border border-[#00ADB5]/30 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(57,62,70,0.1),4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_8px_rgba(57,62,70,0.1)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2),inset_-2px_-2px_4px_rgba(57,62,70,0.2),2px_2px_4px_rgba(0,0,0,0.3),-2px_-2px_4px_rgba(57,62,70,0.2)] hover:border-[#00ADB5]/60 transform hover:scale-[0.98] active:scale-[0.96]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
