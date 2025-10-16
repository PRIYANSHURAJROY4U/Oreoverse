// import React from "react"
// import { cn } from "../../lib/utils"

// const Button = React.forwardRef(({ className, variant = "default", size = "default", children, ...props }, ref) => {
//   const baseStyles =
//     "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

//   const variants = {
//     default: "bg-primary text-primary-foreground hover:bg-primary/90",
//     outline: "border border-input hover:bg-accent hover:text-accent-foreground",
//     ghost: "hover:bg-accent hover:text-accent-foreground",
//     secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//   }

//   const sizes = {
//     default: "h-10 py-2 px-4",
//     sm: "h-9 px-3 text-sm",
//     lg: "h-11 px-8 text-lg",
//   }

//   return (
//     <button className={cn(baseStyles, variants[variant], sizes[size], className)} ref={ref} {...props}>
//       {children}
//     </button>
//   )
// })

// Button.displayName = "Button"

// export default Button







import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      default: "bg-purple-600 text-white hover:bg-purple-700",
      outline: "border border-purple-300 text-purple-600 hover:bg-purple-50 bg-transparent",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive: "bg-red-600 text-white hover:bg-red-700",
    };

    const sizes = {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3 text-sm",
      lg: "h-11 px-8 text-lg",
      icon: "h-10 w-10",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;