import { RandomDataProviderService } from './random-data-provider.service'

let randomServiceFactory5 = () => {
    return new RandomDataProviderService(5);
};

export let randomServiceProvider5 =
    {
        provide: RandomDataProviderService,
        useFactory: randomServiceFactory5,
    };