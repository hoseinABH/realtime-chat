// Common components
import { Button } from '@/components/ui/Button';

interface Props {}

const Page: React.FC<Props> = (props) => {
  return (
    <div>
      <Button isLoading>Submit</Button>
    </div>
  );
};

export default Page;
