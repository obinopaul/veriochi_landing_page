'use client';

import { motion } from 'framer-motion';
// @ts-ignore
import UnicornScene from 'unicornstudio-react/next';
import { useParallaxCursor } from '#hooks/use-parallax-cursor';

export function UnicornBackground() {
    const { x, y } = useParallaxCursor({ intensity: 0.5, smoothness: 0.1 });

    return (
        <motion.div
            style={{
                position: 'absolute',
                top: 0,
                left: '-5%',
                width: '110%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
                willChange: 'opacity, transform',
                transform: 'translateZ(0)',
            }}
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1,
                x: x * 100,
                y: y * 100
            }}
            transition={{ 
                opacity: { duration: 0.8, ease: 'easeOut', delay: 1 },
                x: { type: 'spring', stiffness: 50, damping: 20 },
                y: { type: 'spring', stiffness: 50, damping: 20 }
            }}
        >
            <UnicornScene
                jsonFilePath="/scenes/flow-background.json"
                width="100%"
                height="100%"
                scale={1}
                dpi={1}
                fps={60}
                onError={(error: any) => console.error('UnicornScene error:', error)}
                onLoad={() => console.log('UnicornScene loaded successfully')}
            />
        </motion.div>
    );
}
