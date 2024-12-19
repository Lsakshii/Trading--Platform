import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';
import { InvestComponent } from './invest/invest.component';
import { MarketDataComponent } from './market-data/market-data.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { TransactionComponent } from './transaction/transaction.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProfileComponent } from './profile/profile.component';
import { TradeComponent } from './trade/trade.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path:'',component:HomeComponent },
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'adminlogin',component:AdminloginComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'viewfeedback',component:ViewfeedbackComponent},
    {path:'marketdata',component:MarketDataComponent},
    {path:'newsfeed',component:NewsfeedComponent},
    {path:'analysis',component:AnalysisComponent},
    {path:'transaction',component:TransactionComponent},
    {path:'privacy',component:PrivacyComponent},
    {path:'profile',component:ProfileComponent},
    {path:'trade',component:TradeComponent},
    {path:'about',component:AboutComponent}
];
