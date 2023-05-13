import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent } from '../slice/contentSlice';
import Spinner from 'react-bootstrap/Spinner';
import { colorSliceAction } from '../slice/backgroundColorSlice';

function ComponentWithRedux() {
  const dispatch = useDispatch();

  useEffect(() => {
    // We directly call the fetch function instead of using actions
    dispatch(fetchContent());
  }, [dispatch]);

  const contents = useSelector((state) => state.content.contents);
  const isLoading = useSelector((state) => state.content.isLoading);
  const error = useSelector((state) => state.content.error);

  if (isLoading) {
    return (
      <div className="text-center">
        {' '}
        <Spinner animation="border" variant="success" />
      </div>
    );
  }

  if (error) {
    return error;
  }

  const onChangeColorHandler = (imageURL) => {
    const url = imageURL;
    const params = url.split('/');
    let lastParam = params[params.length - 1];
    lastParam = lastParam.length == 6 ? lastParam : `0${lastParam}`;

    dispatch(colorSliceAction.changeColor(lastParam));
  };
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
      {contents.map((content) => (
        <div key={content.id}>
          <img
            onClick={() => onChangeColorHandler(content.thumbnailUrl)}
            src={`${content.thumbnailUrl}`}
            alt={`${content.title}`}
            className="w-full h-full rounded"
          />
        </div>
      ))}
    </div>
  );
}

export default ComponentWithRedux;
