import React, { useEffect, useRef } from 'react';
import Globe from 'globe.gl';
import { campusList } from '@/lib/constants';

export default function GlobeVisualization() {
  const globeEl = useRef();

  useEffect(() => {
    const containerWidth = globeEl.current.parentElement.offsetWidth;
    const containerHeight = globeEl.current.parentElement.offsetHeight;

    const globe = Globe()
      .backgroundColor('rgba(0,0,0,0)')
      .width(containerWidth)
      .height(containerHeight)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .labelsData(campusList)
      .labelLat('lat')
      .labelLng('lng')
      .labelText('name')
      .labelSize(1.6)
      .labelDotRadius(0.4)
      .labelColor(() => '#ffffff')
      .labelResolution(2);

    globe(globeEl.current);

    const handleResize = () => {
      const width = globeEl.current.parentElement.offsetWidth;
      const height = globeEl.current.parentElement.offsetHeight;
      globe.width(width).height(height);
    };

    window.addEventListener('resize', handleResize);
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 3;

    return () => {
      globe._destructor();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={globeEl} className="w-full h-full" />
  );
}
