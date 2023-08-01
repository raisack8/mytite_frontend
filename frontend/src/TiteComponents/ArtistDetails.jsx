import React from 'react'

const ArtistDetails = (props) => {
  const{setModalDisplayMode,section,handleClose} = props;

  const handleEditClick = () => {
    setModalDisplayMode(1);
  };

  return (
    <div className='text-xl'>
      <div className='flex justify-center'>
        <h2 id="child-modal-title">{section.artist_name}</h2>

      </div>
      <div className='pt-6 flex justify-center'>
        <p id="child-modal-description">
          {section.other1}
        </p>
      </div>
      {(section.other2 != null && section.other2 != "") &&(
        <div className='pt-6 flex justify-center'>
          <img width={'60%'} src={process.env.PUBLIC_URL + section.other2}  alt={section.artist_name} />
        </div>
      )}
      {(section.other3 != null && section.other3 != "") &&(
        <div className='pt-6 flex justify-center'>
        <p>{section.other3}</p>
        </div>
      )}
      {(section.other4 != null && section.other4 != "") &&(
        <div className='pt-6 flex justify-center'>
        <p>{section.other4}</p>
        </div>
      )}
      {(section.other5 != null && section.other5 != "") &&(
        <div className='pt-6 flex justify-center'>
        <p>{section.other5}</p>
        </div>
      )}
      {(section.official_url != null && section.official_url != "") &&(
        <div className='pt-6 flex justify-center'>
          <a href={section.official_url} target="_blank"
           className='px-4 border border-black rounded'>公式HP</a>
        </div>
        )}
      {(section.twitter_id != null && section.twitter_id != "") &&(
        <div className='pt-6 flex justify-center'>
          <a href={`https://twitter.com/${section.twitter_id}`} target="_blank">
            <img width={'30rem'} src={process.env.PUBLIC_URL + '/resources/twitter.svg'} alt='公式Twitter'></img>
          </a>
        </div>
      )}
      <div className='pt-6 flex justify-center'>
        <div className='px-2 text-xs border border-black rounded'
          onClick={handleEditClick}> 
          edit(管理者用)
        </div>
      </div>
    </div>
  )
}

export default ArtistDetails