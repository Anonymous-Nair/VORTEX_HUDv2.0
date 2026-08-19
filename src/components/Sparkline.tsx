import { useEffect, useRef } from "react";

interface SparklineProps {
  series: () => number[];
  color: string;
  max?: number;
}

/** Canvas sparkline reading a ring buffer directly — zero React re-renders. */
export function Sparkline({ series, color, max }: SparklineProps): JSX.Element {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let raf = 0;
    const draw = () => {
      raf = requestAnimationFrame(draw);
      const cv = ref.current;
      if (!cv) return;
      const ctx = cv.getContext("2d");
      if (!ctx) return;
      const W = 190;
      const H = 40;
      if (cv.width !== W) cv.width = W;
      if (cv.height !== H) cv.height = H;
      ctx.clearRect(0, 0, W, H);
      const data = series();
      if (data.length < 2) return;
      let m = max ?? 0;
      if (!m) {
        for (const v of data) if (v > m) m = v;
        m = m * 1.15 || 1;
      }
      ctx.beginPath();
      for (let i = 0; i < data.length; i++) {
        const x = (i / (data.length - 1)) * W;
        const y = H - 3 - (Math.min(data[i], m) / m) * (H - 8);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.4;
      ctx.shadowColor = color;
      ctx.shadowBlur = 5;
      ctx.stroke();
      ctx.shadowBlur = 0;
      // fill
      ctx.lineTo(W, H);
      ctx.lineTo(0, H);
      ctx.closePath();
      ctx.globalAlpha = 0.09;
      ctx.fillStyle = color;
      ctx.fill();
      ctx.globalAlpha = 1;
      // head dot
      const lastX = W;
      const lastY = H - 3 - (Math.min(data[data.length - 1], m) / m) * (H - 8);
      ctx.fillStyle = color;
      ctx.fillRect(lastX - 2.5, lastY - 2.5, 4, 4);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [series, color, max]);

  return <canvas ref={ref} style={{ width: "100%", height: 26, display: "block" }} />;
}
