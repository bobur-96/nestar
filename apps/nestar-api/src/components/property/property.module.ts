import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import PropertySchema from '../../schemas/Property.model';
import { AuthModule } from '../auth/auth.module';
import { ViewModule } from '../view/view.module';
import { PropertyResolver } from './property.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { MemberModule } from '../member/member.module';

@Module({})
@Module({
	imports: [
		MongooseModule.forFeature([{ name: 'Property', schema: PropertySchema }]),
		AuthModule,
		ViewModule,
		MemberModule,
	],
	providers: [PropertyResolver, PropertyService],
})
export class PropertyModule {}
