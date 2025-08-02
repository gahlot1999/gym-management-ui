type BaseProps = {
  imgPath: string;
  containerClass?: string;
  imageClass?: string;
};

type WithOverlay = {
  textOverlay: true;
  name: string;
};

type WithoutOverlay = {
  textOverlay?: false | undefined;
  name?: string;
};

type ImgComponentProps = BaseProps & (WithOverlay | WithoutOverlay);

function Image(props: ImgComponentProps) {
  const {
    imgPath,
    containerClass,
    imageClass,
    name,
    textOverlay = false,
  } = props;

  return (
    <div className={`relative h-full w-full group ${containerClass ?? ''}`}>
      <img
        src={imgPath}
        className={`h-full w-full object-cover rounded-xl ${imageClass ?? ''}`}
      />
      <div className='absolute inset-0 bg-white/5 rounded-xl pointer-events-none'></div>

      {/* Hover overlay */}
      {textOverlay && (
        <div className='absolute inset-0 rounded-xl bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
          <span className='text-white text-lg font-semibold tracking-wide drop-shadow-lg transition-all duration-300 scale-95 group-hover:scale-100'>
            {name}
          </span>
        </div>
      )}
    </div>
  );
}

export default Image;
