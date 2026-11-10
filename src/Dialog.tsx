import { Dialog as Primitive } from 'radix-ui';
import { X } from 'lucide-react';
import type { ComponentProps } from 'react';
export const Dialog=Primitive.Root;
export const DialogTitle=({children,...props}:ComponentProps<typeof Primitive.Title>)=><Primitive.Title data-slot="dialog-title" {...props}>{children}</Primitive.Title>;
export const DialogDescription=({children,...props}:ComponentProps<typeof Primitive.Description>)=><Primitive.Description data-slot="dialog-description" {...props}>{children}</Primitive.Description>;
export function DialogHeader({children}:ComponentProps<'div'>){return <div>{children}</div>}
export function DialogContent({children,className,...props}:ComponentProps<typeof Primitive.Content>){return <Primitive.Portal><Primitive.Overlay className="dialog-overlay"/><Primitive.Content className={className} {...props}>{children}<Primitive.Close className="dialog-close" aria-label="Close project details"><X size={20}/></Primitive.Close></Primitive.Content></Primitive.Portal>}
