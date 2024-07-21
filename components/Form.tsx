import { createTask } from '@/lib/actions';

const Form = async () => {

  return (
    <form action={createTask}>
      <label htmlFor="desc" className='px-2'>Description</label>
      <input type="text" name='desc' id='desc' />
      <button className='pl-3' type='submit'>Odeslat</button>
    </form>
  );
}

export default Form